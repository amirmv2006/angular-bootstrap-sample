package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseEmptyDtoImpl;

/**
 * Created by amv on 3/26/17.
 */
public class DataTableOrderDto extends BaseEmptyDtoImpl {

    private Integer column;
    private String dir;

    public Integer getColumn() {
        return column;
    }

    public void setColumn(Integer column) {
        this.column = column;
    }

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }
}
