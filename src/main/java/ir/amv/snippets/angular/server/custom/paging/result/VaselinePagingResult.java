package ir.amv.snippets.angular.server.custom.paging.result;

import ir.amv.os.vaseline.base.core.shared.base.dto.paging.PagingDto;
import ir.amv.os.vaseline.base.core.shared.util.ds.list.IVaselineConvertableList;
import ir.amv.os.vaseline.ws.rest.config.gsonhandler.annot.GsonIgnoreGenericType;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by AMV on 2/24/2016.
 */
@GsonIgnoreGenericType
public class VaselinePagingResult<E>
        extends ArrayList<E>
        implements IVaselineConvertableList<E> {

    private Integer pageNumber;
    private Integer pageSize;
    private Long pageCount;
    private Long totalCount;
    private Long afterFilterCount;

    public VaselinePagingResult(Collection<? extends E> c, PagingDto pagingDto, Long totalCount) {
        this(c, pagingDto, totalCount, totalCount);
    }

    public VaselinePagingResult(Collection<? extends E> c, PagingDto pagingDto, Long totalCount, Long afterFilterCount) {
        super(c);
        this.totalCount = totalCount;
        this.afterFilterCount = afterFilterCount;
        pageNumber = pagingDto.getPageNumber();
        pageSize = pagingDto.getPageSize();
        pageCount = totalCount / pageSize;
        if (totalCount % pageSize != 0) {
            pageCount ++;
        }
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }

    public Long getPageCount() {
        return pageCount;
    }

    public void setPageCount(Long pageCount) {
        this.pageCount = pageCount;
    }

    public Long getAfterFilterCount() {
        return afterFilterCount;
    }

    public void setAfterFilterCount(Long afterFilterCount) {
        this.afterFilterCount = afterFilterCount;
    }

    @Override
    public IVaselineConvertableList<E> createConvertedList() {
        return new VaselinePagingResult<E>(new ArrayList<E>(), new PagingDto(null, pageNumber, pageSize), totalCount, afterFilterCount);
    }

}
