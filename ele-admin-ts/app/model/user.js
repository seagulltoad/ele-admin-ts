"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const { STRING, DECIMAL, BIGINT, INTEGER, CHAR, DATE } = app.Sequelize;
    const User = app.model.define("user", {
        id: {
            type: BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: STRING(255),
        email: STRING(255),
        avatar: STRING(255),
        created_at: DATE(6),
        updated_at: DATE(6),
        is_delete: INTEGER
    }, {
        freezeTableName: false,
        tableName: "user",
        timestamps: false
    });
    return class extends User {
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQSxtQkFBeUIsR0FBZ0I7SUFDckMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0RSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDekIsTUFBTSxFQUNOO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFNBQVMsRUFBRSxPQUFPO0tBQ25CLEVBQ0Q7UUFDRSxlQUFlLEVBQUUsS0FBSztRQUN0QixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsS0FBSztLQUNsQixDQUNKLENBQUE7SUFDRCxPQUFPLEtBQU0sU0FBUSxJQUFJO0tBQ3hCLENBQUE7QUFDTCxDQUFDO0FBekJELDRCQXlCQyJ9