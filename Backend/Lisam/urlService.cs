using Lisam.Models;

namespace Lisam;
public interface IUrlService {
    string GetUrl();
    void SetUrl(string url);
    Registered GetRegistered();
    void Register(Registered body);
}

public class UrlService : IUrlService {
    private string _url = "";
    private Registered _registered = new Registered {name = "", group = -1};
    public string GetUrl() => _url;
    public void SetUrl(string url) => _url = url;
    public Registered GetRegistered() => _registered;
    public void Register(Registered registered) => _registered = registered;
}