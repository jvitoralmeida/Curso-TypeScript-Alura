import { NegociacaoController } from "./controllers/index";
const controller = new NegociacaoController();
//jQuery aqui
$(".form").submit(controller.adiciona.bind(controller));
