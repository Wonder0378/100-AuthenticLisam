using Microsoft.AspNetCore.Mvc;
using Lisam.Context;
using Lisam.Models;
using System.Runtime.InteropServices.Swift;
using System.Collections.Specialized;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;
using System.ComponentModel.Design;
using System.Diagnostics.CodeAnalysis;
using Microsoft.VisualBasic;
namespace Lisam.Controllers;

[Route("api/lisam")]
[ApiController]
public class MainController(LisamBase lisam) : ControllerBase
{
    private readonly LisamBase _lisam = lisam;

    private string _url = "";
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


public async Task<IActionResult> GetURL(String destination)
    {
       return Ok(_url);
    }

public async Task<IActionResult> PutURL(String destination)
    {
        _url = destination;
    }
}