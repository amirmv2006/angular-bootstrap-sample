package ir.amv.snippets.angular.server.module.book;

import ir.amv.os.vaseline.base.architecture.impl.hibernate.server.ent.BaseEntityImpl;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by amv on 3/14/17.
 */
@Entity
@Table(name = "ANG_CITY")
public class BookEntity extends BaseEntityImpl<Long> {

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
