package ir.amv.snippets.angular.config;

import ir.amv.os.vaseline.base.architecture.impl.hibernate.config.VaselineHibernateConfig;
import ir.amv.os.vaseline.base.architecture.impl.hibernate.server.layers.ro.dao.BaseReadOnlyHibernateDaoImpl;
import ir.amv.os.vaseline.base.architecture.impl.hibernate.server.layers.ro.dao.IPagingResultCreator;
import ir.amv.os.vaseline.base.core.config.VaselineCoreConfig;
import ir.amv.os.vaseline.base.core.server.base.ent.IBaseEntity;
import ir.amv.os.vaseline.base.core.server.base.exc.BaseVaselineServerException;
import ir.amv.os.vaseline.base.core.shared.base.dto.paging.PagingDto;
import ir.amv.os.vaseline.base.core.shared.base.exc.BaseVaselineClientException;
import ir.amv.os.vaseline.base.core.shared.util.callback.IBaseReturningCallback;
import ir.amv.os.vaseline.base.json.config.VaselineJsonConfig;
import ir.amv.os.vaseline.base.mapper.config.VaselineMapperConfig;
import ir.amv.os.vaseline.base.mapper.config.custconv.BaseVaselineCustomConverterClassHolderImpl;
import ir.amv.os.vaseline.base.mapper.config.custconv.IVaselineCustomConverterClassHolder;
import ir.amv.os.vaseline.base.validation.config.VaselineValidationConfig;
import ir.amv.os.vaseline.ws.rest.config.VaselineWebServiceRestConfig;
import ir.amv.snippets.angular.server.custom.paging.result.VaselinePagingResult;
import ir.amv.snippets.angular.server.module.book.BookEntity;
import ir.amv.snippets.angular.server.module.book.IBookApi;
import ir.amv.snippets.angular.server.module.book.IBookService;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

@Configuration
@ComponentScan("ir.amv.snippets.angular.server")
@Import({
        VaselineCoreConfig.class,
        VaselineValidationConfig.class,
        VaselineMapperConfig.class,
        VaselineJsonConfig.class,
        VaselineHibernateConfig.class,
        VaselineWebServiceRestConfig.class
})
public class SampleAppConfig {

    @Autowired
    IBookService bookService;

    @Autowired
    IBookApi bookApi;

    @PostConstruct
    public void initialize() throws BaseVaselineClientException, BaseVaselineServerException {
//        BookDto bookDto = new BookDto();
//        bookDto.setName("Amir");
//        bookDto.setPublishYear(2020);
//        List<BookDto> bookDtos = bookService.searchByExample(bookDto);
//        if (bookDtos.isEmpty()) {
        ArrayList<BookEntity> books = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            BookEntity bookEntity = new BookEntity();
            bookEntity.setName("Amir " + i);
            bookEntity.setPublishYear(i);
            books.add(bookEntity);
            if (books.size() == 100) {
                bookApi.saveBatch(books);
                books = new ArrayList<>();
            }
        }
        bookApi.saveBatch(books);
        System.out.println("DONEEEEEE");
//        }
    }

    @Bean
    public IVaselineCustomConverterClassHolder customConverterClassHolder() {
        return new BaseVaselineCustomConverterClassHolderImpl() {
            public Class<?>[] customConverterClasses() {
                return new Class<?>[0];
            }
        };
    }

    @Bean
    public IPagingResultCreator pagingResultCreator() {
        return new IPagingResultCreator() {
            @Override
            public <E extends IBaseEntity<?>> List<E> getPagingResult(BaseReadOnlyHibernateDaoImpl<E, ?, ?> dao, IBaseReturningCallback<DetachedCriteria> createCriteriaCallback, PagingDto pagingDto) {
                DetachedCriteria detCriteria = createCriteriaCallback.execute();
                Criteria criteria = dao.getCriteriaFromDetachedCriteria(detCriteria);
                criteria = dao.paginateCriteria(criteria, pagingDto);
                List<E> listFromCriteria = dao.getListFromCriteria(criteria);
                detCriteria = createCriteriaCallback.execute();
                detCriteria = dao.getCountCriteria(detCriteria);
                criteria = dao.getCriteriaFromDetachedCriteria(detCriteria);
                Long afterFilterCount = dao.getCountResult(criteria);
                Long totalCount = dao.countAll();
                return new VaselinePagingResult<E>(listFromCriteria, pagingDto, totalCount, afterFilterCount);
            }
        };
    }
}
