package ir.amv.snippets.angular.server.module.book.impl;

import ir.amv.os.vaseline.base.architecture.impl.server.layers.base.crud.service.BaseCrudServiceImpl;
import ir.amv.snippets.angular.server.module.book.BookEntity;
import ir.amv.snippets.angular.server.module.book.IBookApi;
import ir.amv.snippets.angular.server.module.book.IBookService;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.springframework.stereotype.Service;

/**
 * Created by AMV on 9/17/2016.
 */
@Service
public class BookServiceImpl
        extends BaseCrudServiceImpl<BookEntity, BookDto, Long, IBookApi>
        implements IBookService {
}
