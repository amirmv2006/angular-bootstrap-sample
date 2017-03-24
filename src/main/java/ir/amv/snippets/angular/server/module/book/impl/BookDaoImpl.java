package ir.amv.snippets.angular.server.module.book.impl;

import ir.amv.os.vaseline.base.architecture.impl.hibernate.server.layers.crud.dao.BaseCrudHibernateDaoImpl;
import ir.amv.snippets.angular.server.module.book.BookEntity;
import ir.amv.snippets.angular.server.module.book.IBookDao;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.springframework.stereotype.Repository;

/**
 * Created by AMV on 9/17/2016.
 */
@Repository
public class BookDaoImpl
        extends BaseCrudHibernateDaoImpl<BookEntity, BookDto, Long>
        implements IBookDao {
}
