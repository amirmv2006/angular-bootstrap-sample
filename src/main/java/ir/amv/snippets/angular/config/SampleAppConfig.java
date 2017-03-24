package ir.amv.snippets.angular.config;

import ir.amv.os.vaseline.base.architecture.impl.hibernate.config.VaselineHibernateConfig;
import ir.amv.os.vaseline.base.core.config.VaselineCoreConfig;
import ir.amv.os.vaseline.base.json.config.VaselineJsonConfig;
import ir.amv.os.vaseline.base.mapper.config.VaselineMapperConfig;
import ir.amv.os.vaseline.base.mapper.config.custconv.BaseVaselineCustomConverterClassHolderImpl;
import ir.amv.os.vaseline.base.mapper.config.custconv.IVaselineCustomConverterClassHolder;
import ir.amv.os.vaseline.base.validation.config.VaselineValidationConfig;
import ir.amv.os.vaseline.ws.rest.config.VaselineWebServiceRestConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

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

    @Bean
    public IVaselineCustomConverterClassHolder customConverterClassHolder() {
        return new BaseVaselineCustomConverterClassHolderImpl() {
            public Class<?>[] customConverterClasses() {
                return new Class<?>[0];
            }
        };
    }
}
