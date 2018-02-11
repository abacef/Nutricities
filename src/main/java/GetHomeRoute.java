import com.google.maps.model.AutocompletePrediction;
import spark.Request;
import spark.Response;
import spark.Route;
import com.google.maps.*;


public class GetHomeRoute implements Route {

    public Object handle(Request request, Response response) throws Exception {
        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey("AIzaSyDEptNYc6WNs8Uikp8QSZeaG9dk-XjoQGY")
                .build();
        PlaceAutocompleteRequest req = new PlaceAutocompleteRequest(context) {};
        AutocompletePrediction[] set_curr = req.input("New York City").await();
        System.out.println(set_curr);


        return null;
    }
}