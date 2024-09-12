import { QuestionAccordion } from "../QuestionAccordion";

export const FrequentQuestions = () => {
	return (
		<section className="my-6">
			<h1 className="text-xl font-medium mb-6">Dúdidas frequentes</h1>

			<QuestionAccordion title="Por que a tarifa não é descontada do empréstimo?">
				O valor da Tarifa de Cadastro é tratado separadamente para garantir
				transparência e clareza no processo de concessão de crédito. Descontar a
				tarifa diretamente do valor do empréstimo poderia causar confusão sobre
				os custos envolvidos. A tarifa é associada ao serviço de análise e
				processamento do seu pedido, que ocorre antes da aprovação do
				empréstimo. Mantemos esses valores separados para que você tenha total
				compreensão das taxas e do montante que receberá.
			</QuestionAccordion>

			<QuestionAccordion title="O que acontece após pagar a tarifa?">
				Você será redirecionado automaticamente para a página onde confirmará e
				autorizará a transferência do dinheiro para sua conta.
			</QuestionAccordion>

			<QuestionAccordion title="Quanto tempo demora para liberar o crédito?">
				Como o pagamento é feito via Pix, a liberação do empréstimo é imediata.
				Todo o processo, incluindo a transferência do crédito, leva cerca de
				5-10 minutos.
			</QuestionAccordion>

			<QuestionAccordion title="Tô com medo de cair em golpe">
				Elyte atua há mais de 14 anos com empréstimos online, contando com
				milhares de clientes satisfeitos. Nosso site é seguro e confiável. Não
				solicitamos sua senha ou dados bancários. Sugerir que somos um golpe é
				um insulto à nossa reputação e à confiança que nossos clientes têm em
				nós.
			</QuestionAccordion>

			<QuestionAccordion title="Posso pagar a tarifa com cartão de crédito?">
				Não, a tarifa de cadastro só pode ser paga via Pix. Se você não tem uma
				conta em um banco que oferece Pix, peça a um amigo ou familiar para
				fazer o pagamento para você.
			</QuestionAccordion>

			<QuestionAccordion title="O que acontece se eu não pagar a tarifa?">
				Se você não pagar a tarifa, seu pedido de empréstimo será cancelado.
				Você pode tentar novamente a qualquer momento, mas lembre-se de que a
				tarifa é necessária para cobrir os custos de análise e processamento do
				seu pedido.
			</QuestionAccordion>
		</section>
	);
};
