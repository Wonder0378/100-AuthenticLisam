
namespace Lisam;
public interface IUrlService {
    string GetUrl();
    void SetUrl(string url);
}

public class UrlService : IUrlService {
    private string _url = "";
    
    public string GetUrl() => _url;
    public void SetUrl(string url) => _url = url;
}