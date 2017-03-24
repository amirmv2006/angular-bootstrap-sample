package ir.amv.snippets.angular;

import ir.amv.os.vaseline.base.core.shared.base.exc.BaseVaselineClientException;
import ir.amv.snippets.angular.config.SampleAppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Created by AMV on 9/17/2016.
 */
public class Runner {

    public static void main(String[] args) throws BaseVaselineClientException {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(SampleAppConfig.class);
    }
}
