﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hardware.Migrations.CustomerDbcontextMigrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Cname",
                table: "customers",
                newName: "customer");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "customer",
                table: "customers",
                newName: "Cname");
        }
    }
}
