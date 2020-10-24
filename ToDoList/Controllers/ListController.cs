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
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var items = await _repo.GetItems(userId);

            var itemsToReturn = _mapper.Map<IEnumerable<ToDoListItemToReturnDto>>(items);

            return Ok(itemsToReturn);
        }

        [HttpGet("{id}", Name = "GetItem")]
        public async Task<IActionResult> GetItem(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var itemFromRepo = await _repo.GetItem(id);

            if (itemFromRepo == null)
                return NotFound();

            if (userId != itemFromRepo.UserId)
                return Unauthorized();

            var itemToReturn = _mapper.Map<ToDoListItemToReturnDto>(itemFromRepo);

            return Ok(itemToReturn);
        }


        [HttpPost()]
        public async Task<IActionResult> CreateToDoListItem(int userId, ToDoListItemToCreateDto toDoListItemToCreateDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            toDoListItemToCreateDto.UserId = userId;

            var item = _mapper.Map<ToDoListItem>(toDoListItemToCreateDto);

            _repo.Add(item);

            if (await _repo.SaveAll())
            {
                var itemToReturn = _mapper.Map<ToDoListItemToReturnDto>(item);
                return CreatedAtRoute("GetItem", new { userId, id = item.Id }, itemToReturn);
            }

            throw new Exception("Failed to create list item on save");
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateToDoListItem(int userId, int id, ToDoListItemToUpdateDto doListItemToUpdateDto)
        //{
        //    if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //        return Unauthorized();


        //}

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoListItem(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var itemToDelete = await _repo.GetItem(id);

            if (itemToDelete == null)
                return NotFound();

            if (userId != itemToDelete.UserId)
                return Unauthorized();

            _repo.Delete(itemToDelete);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to delete the list item");
        }
    }
}