package ir.amv.snippets.angular.server.module.book.impl;

import ir.amv.os.vaseline.base.architecture.impl.server.layers.base.crud.api.BaseCrudApiImpl;
import ir.amv.snippets.angular.server.module.book.BookEntity;
import ir.amv.snippets.angular.server.module.book.IBookApi;
import ir.amv.snippets.angular.server.module.book.IBookDao;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.springframework.stereotype.Component;

/**
 * Created by AMV on 9/17/2016.
 */
@Component
public class BookApiImpl
        extends BaseCrudApiImpl<BookEntity, BookDto, Long, IBookDao>
        implements IBookApi {
}
