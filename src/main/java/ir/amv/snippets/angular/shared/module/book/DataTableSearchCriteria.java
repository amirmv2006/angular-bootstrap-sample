package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseEmptyDtoImpl;

/**
 * Created by amv on 3/26/17.
 */
public class DataTableSearchCriteria extends BaseEmptyDtoImpl {

    private String value;
    private boolean regex;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public boolean isRegex() {
        return regex;
    }

    public void setRegex(boolean regex) {
        this.regex = regex;
    }
}
