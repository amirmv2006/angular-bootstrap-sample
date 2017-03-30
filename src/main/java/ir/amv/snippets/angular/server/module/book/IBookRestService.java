package ir.amv.snippets.angular.server.module.book;

import ir.amv.os.vaseline.base.core.shared.base.dto.paging.PagingDto;
import ir.amv.os.vaseline.base.core.shared.base.exc.BaseVaselineClientException;
import ir.amv.os.vaseline.ws.rest.server.base.crud.IBaseCrudRestService;
import ir.amv.os.vaseline.ws.rest.server.multiparam.annot.JsonMultParam;
import ir.amv.os.vaseline.ws.rest.server.multiparam.annot.JsonParam;
import ir.amv.snippets.angular.shared.module.book.BookDto;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Map;

/**
 * Created by amv on 3/14/17.
 */
@Path("/Book")
public interface IBookRestService extends IBaseCrudRestService<BookDto, Long> {

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("/{id}")
    @GET
    BookDto getById(@PathParam("id") Long id)
            throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("count")
    @GET
    Long countAll() throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @GET
    List<BookDto> getAll() throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("getAllPaged")
    @POST
    List<BookDto> getAll(PagingDto paginationObject)
            throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("countByExample")
    @POST
    Long countByExample(BookDto example) throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("searchByExample")
    @POST
    List<BookDto> searchByExample(BookDto searchExampleDTO)
            throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("searchByExamplePaged")
    @POST
    List<BookDto> searchByExample(
            @JsonMultParam({
                    @JsonParam(paramName = "example", paramType = BookDto.class),
                    @JsonParam(paramName = "pagingDto", paramType = PagingDto.class)}) Map<String, Object> map)
            throws BaseVaselineClientException;

//    @Override
//    @Produces({MediaType.APPLICATION_JSON})
//    @Path("reportByExample")
//    @POST
//    Long reportByExample(
//            @JsonMultParam({
//                    @JsonParam(paramName = "request", paramType = CreateReportRequestClient.class),
//                    @JsonParam(paramName = "example", paramType = BookDto.class)
//            })
//                    Map<String, Object> map) throws BaseVaselineServerException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @POST
    Long save(BookDto t) throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @PUT
    void update(BookDto t) throws BaseVaselineClientException;

    @Override
    @Produces({MediaType.APPLICATION_JSON})
    @Path("/{id}")
    @DELETE
    void deleteById(@PathParam("id") Long id)
            throws BaseVaselineClientException;


}
