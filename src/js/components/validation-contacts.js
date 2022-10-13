import { validateForms } from '../functions/validate-forms';

const rules = [
	{
		ruleSelector: '.contacts__input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя!',
			},
		],
	},
	{
		ruleSelector: '.contacts__input-email',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат',
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Недопустимый формат',
			},
		],
	},
];

const afterForm = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__form', rules, afterForm);
