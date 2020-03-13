import require from '@/utils/require';

export function getContact(oParams){//将接口输出
	return require.get('/get/contact/',{params:oParams.params
	});
};
