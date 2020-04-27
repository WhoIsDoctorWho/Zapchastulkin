using Microsoft.AspNetCore.Mvc;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace Zapchastulkin.Controllers
{
    [ApiController]
    [Route("api/upload")]
    public class ImageUploadController : Controller
    {
        [HttpPost]
        public IActionResult Post()
        {
            IFormFile file = Request.Form.Files[0];
            IConfiguration config = new ConfigurationBuilder().AddJsonFile("../appsettings.json").Build();
            Account account = new Account( 
                config["cloudinary:CloudName"],
                config["cloudinary:Key"],
                config["cloudinary:Secret"]);
            Cloudinary cloudinary = new Cloudinary(account);
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription("img", file.OpenReadStream()),
                Folder = "Zapchastulkin",
                Transformation = new Transformation().Width(220).Height(520).Crop("pad")
            };
            ImageUploadResult uploadResult = cloudinary.Upload(uploadParams);
            return Ok(new { img = uploadResult.SecureUri });
        }
    }
}