/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(); // Nodo ficticio para construir la lista resultante
    let current = dummy;
    let carry = 0;
  
    while (l1 !== null || l2 !== null || carry !== 0) {
      let sum = carry;
  
      // Sumar los valores de los nodos actuales de l1 y l2
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
  
      // Calcular el dígito y el acarreo
      carry = Math.floor(sum / 10);
      const digit = sum % 10;
  
      // Crear nuevo nodo y avanzar
      current.next = new ListNode(digit);
      current = current.next;
    }
  
    return dummy.next; // El primer nodo real está después del ficticio
  }

l1 = [2,4,3], l2 = [5,6,4]

addTwoNumbers(l1, l2)