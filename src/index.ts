import * as pug from 'pug';
import * as fs from 'fs/promises';
async function build() {
    const compileFunc = pug.compile(
        await fs.readFile('./view/templates/blog.pug', 'utf-8')
    );
    const htmlString = compileFunc();
    await fs.writeFile('./dist/index.html', htmlString);
}

build();