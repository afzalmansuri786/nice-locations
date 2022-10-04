"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const APP_DIRECTORY = (0, path_1.join)(__dirname, '..');
    console.log("check 8");
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setViewEngine('hbs');
    app.setBaseViewsDir((0, path_1.join)(APP_DIRECTORY, 'views'));
    app.useStaticAssets((0, path_1.join)(APP_DIRECTORY, 'public'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map