package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseEmptyDtoImpl;

import java.util.List;

/**
 * Created by amv on 3/26/17.
 */
public class DataTableDto extends BaseEmptyDtoImpl {

    private List<DataTableColumnDto> columns;
    private List<DataTableOrderDto> order;
    private Integer start;
    private Integer length;
    private DataTableSearchCriteria search;

    public List<DataTableColumnDto> getColumns() {
        return columns;
    }

    public void setColumns(List<DataTableColumnDto> columns) {
        this.columns = columns;
    }

    public List<DataTableOrderDto> getOrder() {
        return order;
    }

    public void setOrder(List<DataTableOrderDto> order) {
        this.order = order;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public DataTableSearchCriteria getSearch() {
        return search;
    }

    public void setSearch(DataTableSearchCriteria search) {
        this.search = search;
    }
}
