using Microsoft.AspNetCore.Mvc;
using Lisam.Models;
using Lisam;
using System.Security.Cryptography.X509Certificates;
using System.Runtime.CompilerServices;

namespace Lisam.Controllers;

[Route("api/lisam")]
[ApiController]
public class MainController(UrlService urlservice) : ControllerBase
{

    private readonly UrlService _urlservice = urlservice;

    [HttpGet]
    public async Task<IActionResult> GetURL() {
        var url = _urlservice.GetUrl();
        return Ok(url);
    }

    [HttpPut]
    public async Task<IActionResult> PutURL(DefaultDatatype body)
    {
        _urlservice.SetUrl(body.url);
        return Ok();
    }
}
