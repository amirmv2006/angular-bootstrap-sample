package ir.amv.snippets.angular.server.module.book.impl;

import ir.amv.os.vaseline.base.core.shared.base.dto.paging.PagingDto;
import ir.amv.os.vaseline.base.core.shared.base.dto.sort.SortDto;
import ir.amv.os.vaseline.base.core.shared.base.exc.BaseVaselineClientException;
import ir.amv.os.vaseline.ws.rest.server.base.crud.impl.BaseCrudRestServiceImpl;
import ir.amv.snippets.angular.server.module.book.IBookRestService;
import ir.amv.snippets.angular.server.module.book.IBookService;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import ir.amv.snippets.angular.shared.module.book.DataTableDto;
import ir.amv.snippets.angular.shared.module.book.DataTableOrderDto;
import ir.amv.snippets.angular.shared.module.book.DataTableSearchCriteria;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by amv on 3/14/17.
 */
@Service
public class BookRestServiceImpl
        extends BaseCrudRestServiceImpl<BookDto, Long, IBookService>
        implements IBookRestService {
    @Override
    public Response getPageForDataTable(DataTableDto dataTableDto) throws BaseVaselineClientException {
        System.out.println("dataTableDto = " + dataTableDto);
        Map<String, Object> map = new HashMap<>();
        BookDto bookExample = new BookDto();
        DataTableSearchCriteria nameCriteria = dataTableDto.getColumns().get(0).getSearch();
        DataTableSearchCriteria publishYearCriteria = dataTableDto.getColumns().get(1).getSearch();
        bookExample.setName(nameCriteria.getValue());
        bookExample.setPublishYear(publishYearCriteria.getValue().equals("") ? null : Integer.valueOf(publishYearCriteria.getValue()));
        map.put("example", bookExample);
        PagingDto pagingDto = new PagingDto();
        pagingDto.setPageNumber(dataTableDto.getStart() / dataTableDto.getLength());
        pagingDto.setPageSize(dataTableDto.getLength());
        List<SortDto> sortList = new ArrayList<>();
        for (DataTableOrderDto dataTableOrderDto : dataTableDto.getOrder()) {
            Integer columnIndex = dataTableOrderDto.getColumn();
            sortList.add(new SortDto(dataTableDto.getColumns().get(columnIndex).getData(), dataTableOrderDto.getDir().equalsIgnoreCase("asc")));
        }
        pagingDto.setSortList(sortList);
        map.put("pagingDto", pagingDto);
        return Response.ok(searchByExample(map)).header("x-meta-total", countByExample(bookExample)).build();
    }
}
