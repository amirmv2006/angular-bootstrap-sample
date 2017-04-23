package ir.amv.snippets.angular.config;
/*PROTECTED REGION ID(ir.amv.mammut.blah.config.BlahMvcConfig) ENABLED START*/

import ir.amv.os.vaseline.angular.crud.config.VaselineAngularCrudMvcConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;

/**
 * Generated Class by AMV
 */
@EnableWebMvc
@Configuration
@Import(VaselineAngularCrudMvcConfig.class)
public class SampleMvcConfig extends WebMvcConfigurerAdapter {

	@Override
    public void configureDefaultServletHandling(
            DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

	//	@Autowired
	//	@Qualifier("getValidatorFactory")
	//	Validator validator;
	//
	//	@Override
	//	public Validator getValidator() {
	//		return validator;
	//	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		super.addInterceptors(registry);
		registry.addInterceptor(localeChangeInterceptor());
	}

	@Bean
	public LocaleChangeInterceptor localeChangeInterceptor() {
		LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
		localeChangeInterceptor.setParamName("language");
		return localeChangeInterceptor;
	}

	@Bean(name = "localeResolver")
	public LocaleResolver getLocaleResolver() {
		return new CookieLocaleResolver();
	}
}
/*PROTECTED REGION END*/

