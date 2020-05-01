using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Zapchastulkin.Services;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Route("api/upload")]
    public class ImageUploadController : Controller
    {
        [HttpPost]
        public async Task<ActionResult<System.Uri>> Post([FromServices]CloudinaryUploadService cloudinary)
        {
            IFormFile file = Request.Form.Files[0];
            var result = await cloudinary.Upload(file);
            return Ok(result); 
        }
    }
}