using Microsoft.AspNetCore.Mvc;

namespace shervinbdndev.Controllers;

public class HomeController : Controller
{
    public HomeController()
    {
        
    }

    public IActionResult Index()
    {
        ViewData["Title"] = "شروین بدان‌دِو - برنامه‌نویس و توسعه‌دهنده نرم‌افزار";
        ViewData["Description"] = "نمونه‌کارها، مهارت‌ها و مقالات شروین بدان‌دِو در زمینه برنامه‌نویسی و توسعه وب.";
        ViewData["Keywords"] = "برنامه نویسی, ASP.NET Core, C#, پورتفولیو, توسعه دهنده";
        ViewData["Canonical"] = Url.Action("Index", "Home", null, Request.Scheme);
        ViewData["OGTitle"] = "شروین بدان‌دِو - برنامه نویس ASP.NET Core";
        ViewData["OGDescription"] = "وبسایت رسمی شروین بدان‌دِو | نمونه‌کارها و مقالات برنامه‌نویسی";
        ViewData["OGImage"] = Url.Content("~/images/preview.jpg");

        return View();
    }
}
