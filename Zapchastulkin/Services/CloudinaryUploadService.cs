using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace Zapchastulkin.Services
{
    public class CloudinaryUploadService
    {
        Cloudinary cloudinary;
        public CloudinaryUploadService()
        {
            IConfiguration config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            Account account = new Account(
                config["cloudinary:CloudName"],
                config["cloudinary:Key"],
                config["cloudinary:Secret"]);
            cloudinary = new Cloudinary(account);
        }
        public async Task<System.Uri> Upload(IFormFile file)
        {                        
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription("img", file.OpenReadStream()),
                Folder = "Zapchastulkin",
                Transformation = new Transformation().Width(220).Height(520).Crop("pad")
            };
            ImageUploadResult uploadResult = await cloudinary.UploadAsync(uploadParams);
            return uploadResult.SecureUri;
        }
    }
}
