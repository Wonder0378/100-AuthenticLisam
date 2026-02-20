using Lisam.Models;

namespace Lisam;

public class LisamBase
{
    public async Task<DefaultDatatype> GetSomethingFromLisam(Guid id)
    {
        return new DefaultDatatype {
            Id = id,
            Name = "Lisam"
        };
    }
}