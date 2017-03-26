package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseEmptyDtoImpl;

/**
 * Created by amv on 3/26/17.
 */
public class DataTableColumnDto extends BaseEmptyDtoImpl {

    private String data;
    private String name;
    private Boolean searchable;
    private Boolean orderable;
    private DataTableSearchCriteria search;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getSearchable() {
        return searchable;
    }

    public void setSearchable(Boolean searchable) {
        this.searchable = searchable;
    }

    public Boolean getOrderable() {
        return orderable;
    }

    public void setOrderable(Boolean orderable) {
        this.orderable = orderable;
    }

    public DataTableSearchCriteria getSearch() {
        return search;
    }

    public void setSearch(DataTableSearchCriteria search) {
        this.search = search;
    }
}
