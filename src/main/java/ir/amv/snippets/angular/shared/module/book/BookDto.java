package ir.amv.snippets.angular.shared.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.base.impl.BaseDtoImpl;
import ir.amv.os.vaseline.base.core.shared.validation.IEntitySaveOrUpdateValidation;
import ir.amv.os.vaseline.base.core.shared.validation.IEntitySaveValidation;
import ir.amv.os.vaseline.base.core.shared.validation.IEntityUpdateValidation;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by amv on 3/14/17.
 */
public class BookDto extends BaseDtoImpl<Long> {

    @NotNull(groups = {IEntitySaveOrUpdateValidation.class})
    @Min(value = 1, groups = {IEntitySaveOrUpdateValidation.class})
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
