using Microsoft.AspNetCore.Mvc;
using Lisam.Models;
using Lisam;

namespace Lisam.Controllers;

[Route("api/register")]
[ApiController]
public class RegisterController(UrlService urlservice) : ControllerBase
{

    private readonly UrlService _urlservice = urlservice;

    [HttpGet]
    public async Task<IActionResult> GetRegistered() {
        var registered = _urlservice.GetRegistered();
        return Ok(new { name = registered.name, group = registered.group});
    }

    [HttpPut]
    public async Task<IActionResult> Register(Registered body)
    {
        _urlservice.Register(body);
        return Ok();
    }
}
