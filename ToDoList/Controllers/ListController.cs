using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Dtos;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/user/{userId}/[controller]")]
    [ApiController]
    public class ListController : ControllerBase
    {
        private readonly IToDoListRepository _repo;
        private readonly IMapper _mapper;

        public ListController(IToDoListRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems(int userId)
        {
            var items = await _repo.GetItems(userId);

            var itemsToReturn = _mapper.Map<IEnumerable<ToDoListItemToReturnDto>>(items);

            return Ok(itemsToReturn);
        }

        [HttpGet("{id}", Name = "GetItem")]
        public async Task<IActionResult> GetItem(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var itemFromRepo = _repo.GetItem(id);

            if (itemFromRepo == null)
                return NotFound();

            var itemToReturn = _mapper.Map<ToDoListItemToReturnDto>(itemFromRepo);

            return Ok(itemToReturn);
        }


        //[HttpPost()]
        //public async Task<IActionResult> CreateToDoListItem(int userId, ToDoListItemToCreateDto toDoListItemToCreateDto)
        //{
        //    if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //        return Unauthorized();

        //    var item = _mapper.Map<ToDoListItem>(toDoListItemToCreateDto);

        //    _repo.Add(item);

        //    if(await _repo.SaveAll())
        //    {
        //        var itemToReturn = _repo.GetItem(item.Id);
        //    }
        //}
    }
}