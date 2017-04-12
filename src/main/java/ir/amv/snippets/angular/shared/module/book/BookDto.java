package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseDtoImpl;
import ir.amv.os.vaseline.base.core.shared.validation.IEntitySaveOrUpdateValidation;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by amv on 3/14/17.
 */
public class BookDto extends BaseDtoImpl<Long> {

    @NotNull(groups = {IEntitySaveOrUpdateValidation.class})
    @Size(min = 1, groups = {IEntitySaveOrUpdateValidation.class})
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
