using Microsoft.AspNetCore.Mvc;

namespace shervinbdndev.Controllers;

public class HomeController : Controller
{

    public HomeController(){}

    public IActionResult Index()
    {
        return View();
    }
}
