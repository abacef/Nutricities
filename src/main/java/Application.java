import static spark.Spark.get;

public class Application {
    public static void main(String[] args) {
        get("/home", (req, res) -> "Hello World");
        System.out.println("home loaded: 0.0.0.0.4567");
    }
}
