package ir.amv.snippets.angular.server.module.book;

import ir.amv.os.vaseline.base.architecture.server.layers.base.crud.api.IBaseCrudApi;
import ir.amv.snippets.angular.shared.module.book.BookDto;

/**
 * Created by AMV on 9/17/2016.
 */
public interface IBookApi extends IBaseCrudApi<BookEntity, BookDto, Long> {
}
