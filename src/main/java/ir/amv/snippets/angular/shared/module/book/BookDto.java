package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseDtoImpl;

/**
 * Created by amv on 3/14/17.
 */
public class BookDto extends BaseDtoImpl<Long> {

    private String name;
    private Integer publishYear;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPublishYear() {
        return publishYear;
    }

    public void setPublishYear(Integer publishYear) {
        this.publishYear = publishYear;
    }
}
