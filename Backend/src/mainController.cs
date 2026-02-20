using Microsoft.AspNetCore.Mvc;
using Lisam.Context;
using Lisam.Models;
namespace Lisam.Controllers;

[Route("api/lisam")]
[ApiController]
public class MainController(LisamBase lisam) : ControllerBase
{
    private readonly LisamBase _lisam = lisam;

    [HttpGet("{id}")]
	public async Task<IActionResult> GetSomething(String id)
	{
        Console.WriteLine(id);
		// Add your implementation here
        if(!Guid.TryParse(id, out Guid guidId))
        {
            return BadRequest("Provided Id isnt eligible Guid");
        }

        Guid guid = Guid.Parse(id);
        var result = await _lisam.GetSomethingFromLisam(guid);
		return Ok(result);
	}
}
