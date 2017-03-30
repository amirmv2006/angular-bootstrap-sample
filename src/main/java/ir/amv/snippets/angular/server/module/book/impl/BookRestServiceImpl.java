package ir.amv.snippets.angular.server.module.book.impl;

import ir.amv.os.vaseline.ws.rest.server.base.crud.impl.BaseCrudRestServiceImpl;
import ir.amv.snippets.angular.server.module.book.IBookRestService;
import ir.amv.snippets.angular.server.module.book.IBookService;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.springframework.stereotype.Service;

/**
 * Created by amv on 3/14/17.
 */
@Service
public class BookRestServiceImpl
        extends BaseCrudRestServiceImpl<BookDto, Long, IBookService>
        implements IBookRestService {

}
