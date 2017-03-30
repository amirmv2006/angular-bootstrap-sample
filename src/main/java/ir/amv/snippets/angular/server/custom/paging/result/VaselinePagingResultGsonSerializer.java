package ir.amv.snippets.angular.server.custom.paging.result;

import com.google.gson.*;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;

/**
 * Created by AMV on 2/24/2016.
 */
@Component
public class VaselinePagingResultGsonSerializer
        implements JsonSerializer<VaselinePagingResult<?>> {

    @Override
    public JsonElement serialize(VaselinePagingResult<?> src, Type typeOfSrc, JsonSerializationContext context) {
        JsonObject result = new JsonObject();
        result.add("pageNumber", new JsonPrimitive(src.getPageNumber()));
        result.add("pageSize", new JsonPrimitive(src.getPageSize()));
        result.add("pageCount", new JsonPrimitive(src.getPageCount()));
        result.add("totalCount", new JsonPrimitive(src.getTotalCount()));
        result.add("afterFilterCount", new JsonPrimitive(src.getAfterFilterCount()));
        JsonArray records = new JsonArray();
        for (Object o : src) {
            records.add(context.serialize(o));
        }
        result.add("records", records);
        return result;
    }
}
