#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include <time.h>
#define MAX_COUNT 21

struct process_info {/*���μ��� ���� ����ü*/
	int arrival_T;
	int service_T;
	int index;

	process_info() {
		arrival_T = 0;
		service_T = 0;
		index = 0;
	}
};

struct Queue {/*�� ť�� ��� ����*/
	int front;
	int end;
	int index;

	Queue() {
		front = 0;
		end = 0;
		index = 0;
	}
};

struct Q_LV {/*ť ������ ���� ������ ť ����*/
	struct Queue *Q;
	int q_size;/*���� �����ִ� ť�� ����*/
	int count;/*����Ǿ� ���� ť�� ������*/
	int time_q;/*Ÿ�����ҿ� ���� ����*/

			   //struct Q_LV::Queue();
	/*Q_LV() { //�ʱ�ȭ�Լ������� �Ʒ� memset���� �ʱ�ȭ ����� 2.��¾ȵǼ� �ٽ� ��
		q_size = 0;
		count = 0;
		time_q = 0;
	}*/

	void Q_in(struct process_info *p_info, int num) {/*ť�� ���� �� ����Ǵ� �Լ�*/
		Q[q_size].index = p_info[num].index;/*���μ����� �ε������� ť�� �Է�*/
		Q[q_size].end = p_info[num].service_T;/*���μ����� ����Ÿ���� ť�� �Է�*/
		q_size++;/*ť�� �ϳ��� ���ȿ� ���� ���μ����� ������ �ϳ� ������*/

		for (int i = 0; i < q_size; i++) {/*ť�� �ϳ� ���ȿ� ���� ���μ��������� ������ ù��° ������ο� ���� ���μ������� ���� ������ �о���,*/
			Q[i].front++;
		}
	}/*�� �� ť���� q_size�� ���μ����� ������ �ް� �� ������ ���� ť�� ũ�⸦ �����Ͽ� ���� �� ������ ���������� �ξ� front���� q_size���� ���ų� �´�� �ִٸ� �ֿ켱 �����ϰڴٴ� ��*/

	int Q_out(int time_q) {/*ť�� ����Ǿ� ������ ��µ� �� ����Ǵ� �Լ�*/
		//for (int i = 0; i < q_size; i++) {/*��ü ť�� �ѷ����� ������ �ϳ��� ������ ��������� ���ϴ� �ݺ���*/
			for (int j = 0; j <= q_size; j++) {/*� ť�� ���� �տ� �����ִ��� �˻��ϴ� �ݺ���*/
				if (Q[j].front == q_size) {/*���� �տ� ���� ť�� ������ ����*/
					for (int k = 0; k < time_q; k++) {/*�� ť�� Ÿ�����Ҹ�ŭ ��������*/
						printf("%c", (char)(65 + Q[j].index));
						count++;/*����� ��ŭ ī��Ʈ*/
						Q[j].end--;/*����� ��ŭ �ش� ť�� ������ ����*/
						if (Q[j].end == 0) {
							Q[j].front = 100;
							q_size--;
							
							return count;
						}
					}
					for (int y = 0; y < q_size; y++) {/*�ش� ���μ����� Ÿ�����Ҹ�ŭ ����Ǹ� ��� ť�� front�� ������ �����*/
						Q[y].front++;
					}
					Q[j].front = 1;/*�� �Ŀ� ����Ǿ��� ť�� front�� 1�� ���� �־� ���� �ڷ� �迭����*/
					break;/*�ι�° �ݺ���, �� ����Ǿ�� �� ť�� �˻��ϴ� �ݺ����� �ش�ť�� �̹� �˻��Ǿ� ��µǸ� Ż���Ͽ� ���� ������ ť�� �˻���*/
				}
			}
		//}
		return count;/*ť�� �ѹ� ����Ǹ鼭 ��ŭ�� ���μ����� ����Ǿ������� 1�� ������ ī��Ʈ�ؼ� ��ȯ*/
	}
};

void lottery(struct process_info *process, int all_size, int process_num) {
	printf("lottery�Լ�\n");

	int data[MAX_COUNT];
	int i = 0;
	int k = 0;
		
	srand((unsigned int)time(NULL));

	//�����μ����� ����Ÿ�Ӱ�����ŭ ���� �Ҵ�(�̰� for������ �ϸ� ��)
		
	for (int k = 0; k < process_num; k++) {
		for (int j = 0; j < process[k].service_T; j++) {
			data[i] = process[k].index;
			i++;
		}
	}

	for (i = 0; i < MAX_COUNT; i++){
		k = rand() % MAX_COUNT + 1;
		printf("%c ", (char)(65+ data[k]));
	}
}


void pipo(struct process_info *process, int all_size, int process_num) {/*142���� ������ ���ϴ� ���Ķ����� �� ����Ÿ���� �Ѿ�� �����ð��� ������ ��¸�����*/

	printf("pipo�Լ�\n");

	for (int i = 0; i < all_size; i++) {/*��üũ�⸸ŭ �ݺ���*/
		for (int k = 0; k < process_num; k++) {
			if (process[k].arrival_T == i) {/*���μ����� �����ð��� ��üũ���� �ð��� ��ġ�ϴ���*/
				for (int j = 0; j < process[k].service_T; j++) {/*�����ð��� ��ġ�ϴ� ���μ����� ���񽺽ð���ŭ ���*/
					printf("%c", (char)(65 + process[k].index));
				}
			}
		}
		/*else if (process[arrival_count].index == NULL) {
		break; �̰� ������µ�
		}*/
	}
}


void rr(struct process_info *process, int all_size,int process_num) {

	printf("����κ��Լ�\n");

	int time_q = 0;
	int count = 0;
	struct Q_LV *QLV;

	//memset(&QLV, 0, sizeof(Q_LV));����� ���� �� ����� ���ߴ� ���� �Ͼ ������ �𸣰��� �̰ɷ� 3�ð���Ƹ��� ����»
	QLV = (Q_LV *)malloc(sizeof(Q_LV));/*�Ʒ� Ȯ���ϸ鼭 ��¿��� �����Ҵ����� �ٲ� �ּ�å������ �� ���氡��*/
	QLV[0].Q = (Queue *)malloc(sizeof(Queue));
	//memset(&QLV[0].Q, 0, sizeof(QLV[0].Q));

	QLV[0].q_size = 0;
	QLV[0].count = 0;
	QLV[0].time_q = 0;

	for (int f = 0; f < process_num; f++) {
		QLV[0].Q[f].end = 0;
		QLV[0].Q[f].front = 0;
		QLV[0].Q[f].index = 0;
	}

	/*QLV[0].count = 1;
	printf("%d", QLV[0].count);

	QLV[0].Q[0].index = 1;
	printf("%d", QLV[0].Q[0].index);�޸𸮿� �����ϴ��� Ȯ�ο뵵 ��������*/

	printf("\nŸ������:");
	scanf_s("%d", &time_q);


	for (int i = 0; i < all_size; i++) {/*��üũ�⸸ŭ �ݺ���*/
		for (int k = 0; k < process_num; k++) {
			if (process[k].arrival_T == i) {/*���μ����� �����ð��� ��üũ���� �ð��� ��ġ�ϴ���*/
				QLV[0].Q_in(process, k);/*ť�� ���μ����� ����*/
			}
		}
		if (count == i) {/*ī��Ʈ�� ��ü ����ĭ���� 1�տ��� �����*/
			QLV[0].Q_out(time_q);/*ť�� ����ִ� ���ڵ��� �ѹ��� �������*/
			count += QLV[0].Q_out(time_q);/*ť�� ����־��� ��, ��µ� ����ŭ ������*/
		}
	}
}

void mlfq(struct process_info *process, int all_size, int process_num) {

	printf("mlfq�Լ�\n");

	struct Q_LV *QLV;
	int q_num = 0;
	int arrival_count = 0;
	int count = 0;
	int QLV_count = 0;

	printf("\nť�� ������:");
	scanf_s("%d", &q_num);

	QLV = (Q_LV *)malloc(sizeof(Q_LV)*q_num);

	for (int i = 0; i < q_num; i++) {
		QLV[i].count = 0;
		QLV[i].q_size = 0;
		QLV[i].time_q = 0;
		QLV[i].Q = (Queue *)malloc(sizeof(Queue));
		for (int f = 0; f < process_num; f++) {
			QLV[i].Q[f].end = 0;
			QLV[i].Q[f].front = 0;
			QLV[i].Q[f].index = 0;
		}
		printf("\n%d��° ť�� Ÿ������:", i+1);
		scanf_s("%d", &QLV[i].time_q);
	}

	for (int j = 0; j < all_size; j++) {/*��üũ�⸸ŭ �ݺ���*/

		if (process[arrival_count].arrival_T == j) {
			QLV[QLV_count].Q_in(process, arrival_count);
			arrival_count++;
		}
		if (count == j) {
			QLV[QLV_count].Q_out(QLV[QLV_count].time_q);
			count += QLV[QLV_count].Q_out(QLV[QLV_count].time_q);
			QLV_count++;
			//����Ÿ�Ӹ� ���ҽ����ָ� ��??

		}
		//printf("%d", QLV[0].Q[arrival_count].front);
	}
}

int main() {
	struct process_info *process;/*���μ��� ����ü ����*/
	int process_num = 0;/*���μ��� ���� ����*/
	int all_size = 0;

	printf("���μ����� ����:%d", process_num);
	scanf_s("%d", &process_num);
	process = (process_info *)malloc(sizeof(process_info)* process_num);/*���μ��� ������ŭ �����Ҵ�*/

	for (int i = 0; i < process_num; i++) {/*���μ���������ŭ�� �ݺ����������� ���μ��� ���� �Է�*/
		printf("\n %d��° ���μ����� �����ð�:", i + 1);
		scanf_s("%d", &process[i].arrival_T);
		printf("\n %d��° ���μ����� ����Ÿ��:", i + 1);
		scanf_s("%d", &process[i].service_T);
		process[i].index = i;
		all_size += process[i].service_T;
		all_size += process[i].arrival_T;
	}

	lottery(process, all_size, process_num);
	pipo(process, all_size, process_num);
	rr(process, all_size, process_num);
	mlfq(process, all_size, process_num);

	return 0;
}
