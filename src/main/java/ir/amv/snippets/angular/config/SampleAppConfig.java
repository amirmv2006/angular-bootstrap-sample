package ir.amv.snippets.angular.config;

import ir.amv.os.vaseline.base.architecture.impl.hibernate.config.VaselineHibernateConfig;
import ir.amv.os.vaseline.base.core.config.VaselineCoreConfig;
import ir.amv.os.vaseline.base.core.shared.base.exc.BaseVaselineClientException;
import ir.amv.os.vaseline.base.json.config.VaselineJsonConfig;
import ir.amv.os.vaseline.base.mapper.config.VaselineMapperConfig;
import ir.amv.os.vaseline.base.mapper.config.custconv.BaseVaselineCustomConverterClassHolderImpl;
import ir.amv.os.vaseline.base.mapper.config.custconv.IVaselineCustomConverterClassHolder;
import ir.amv.os.vaseline.base.validation.config.VaselineValidationConfig;
import ir.amv.os.vaseline.ws.rest.config.VaselineWebServiceRestConfig;
import ir.amv.snippets.angular.server.module.book.IBookService;
import ir.amv.snippets.angular.shared.module.book.BookDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import javax.annotation.PostConstruct;
import java.util.List;

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

    @PostConstruct
    public void initialize() throws BaseVaselineClientException {
        BookDto bookDto = new BookDto();
        bookDto.setName("Amir");
        bookDto.setPublishYear(2020);
        List<BookDto> bookDtos = bookService.searchByExample(bookDto);
        if (bookDtos.isEmpty()) {
            for (int i = 0; i < 20; i++) {
                bookDto.setName("Amir " + i);
                bookService.save(bookDto);
            }
        }
    }

    @Bean
    public IVaselineCustomConverterClassHolder customConverterClassHolder() {
        return new BaseVaselineCustomConverterClassHolderImpl() {
            public Class<?>[] customConverterClasses() {
                return new Class<?>[0];
            }
        };
    }
}
