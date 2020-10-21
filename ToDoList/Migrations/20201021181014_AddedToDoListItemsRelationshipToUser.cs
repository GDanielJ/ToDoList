using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoList.Migrations
{
    public partial class AddedToDoListItemsRelationshipToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ToDoListItems_AspNetUsers_UserId",
                table: "ToDoListItems");

            migrationBuilder.AddForeignKey(
                name: "FK_ToDoListItems_AspNetUsers_UserId",
                table: "ToDoListItems",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ToDoListItems_AspNetUsers_UserId",
                table: "ToDoListItems");

            migrationBuilder.AddForeignKey(
                name: "FK_ToDoListItems_AspNetUsers_UserId",
                table: "ToDoListItems",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
