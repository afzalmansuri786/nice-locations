import  addJestHbsExtension from 'jest-hbs-extension'
import { join } from 'path';

const VIEWS_PATH = join(__dirname,'..','views')
addJestHbsExtension(VIEWS_PATH)