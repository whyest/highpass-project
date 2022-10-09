import { validateForms } from '../functions/validate-forms';

const rules = [
	// {
	// 	ruleSelector: '.input-name',
	// 	rules: [
	// 		{
	// 			rule: 'required',
	// 			value: true,
	// 			errorMessage: 'Заполните имя!',
	// 		},
	// 	],
	// },
	// {
	// 	ruleSelector: '.input-tel',
	// 	tel: true,
	// 	telError: 'Введите корректный телефон',
	// 	rules: [
	// 		{
	// 			rule: 'required',
	// 			value: true,
	// 			errorMessage: 'Заполните телефон!',
	// 		},
	// 	],
	// },
	{
		ruleSelector: '.input-email',
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

validateForms('.about__form', rules, afterForm);
