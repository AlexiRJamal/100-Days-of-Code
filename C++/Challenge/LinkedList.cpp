#include "LinkedList.h"

List::Node::Node(ElementType data)
{
    this->data = data;
    this->next = NULL;
}

List::List()
{
    mySize = 0;
    myFirst = NULL;
}

List::List(const List &orig)
{
    mySize = orig.mySize;
    myFirst = orig.myFirst;

    NodePtr temp = orig.myFirst;
    while (temp != NULL)
    {
        insertAtEnd(temp->data);
        temp = temp->next;
    }
}

List::~List()
{
    if (isEmpty())
    {
        cout << "List is empty" << endl;
    }
    else if (mySize == 1)
    {
        NodePtr temp = myFirst;
        delete temp;
        myFirst = NULL;
        mySize = 0;
    }
    else
    {
        NodePtr temp = myFirst->next;
        NodePtr pred = myFirst;
        while (temp != NULL)
        {
            delete pred;
            pred = temp;
            temp = temp->next;
        }
    }
}

bool List::isEmpty()
{
    return mySize == 0;
}

void List::insertAtBegin(ElementType data)
{
    NodePtr node = new Node(data);
    if (isEmpty())
    {
        myFirst = node;
    }
    else
    {
        node->next = myFirst;
        myFirst = node;
    }
    mySize++;
}

void List::insertAtEnd(ElementType data)
{
    NodePtr node = new Node(data);
    if (isEmpty())
    {
        myFirst = node;
    }
    else
    {
        NodePtr temp = myFirst;
        while (temp != NULL)
        {
            temp = temp->next;
        }
        temp->next = node;
    }
    mySize++;
}

void List::removeFromBegin()
{
    if (isEmpty())
    {
        cout << "List is empty" << endl;
    }
    else
    {
        //if(mySize == 1){ No need for it since we're removing from begining.
        NodePtr temp = myFirst;
        myFirst = myFirst->next; //Anyway it's null, to avoid confusion.
        delete temp;
        mySize--;
    }
}

void List::removeFromEnd()
{
    if (isEmpty())
    {
        cout << "Lists is empty" << endl;
    }
    else if (mySize == 1)
    {
        NodePtr temp = myFirst;
        myFirst = myFirst->next;
        delete temp;
        mySize = 0;
    }
    else
    {
        NodePtr temp = myFirst->next;
        while (temp != NULL)
        {
            temp = temp->next;
        }
        delete temp;
        mySize--;
    }
}

List &List::operator=(List &list)
{
    //To check if the two arrays aren't duplicate
    if (this != &list)
    {
        mySize = list.mySize;
        myFirst = new Node(list.myFirst->data);

        NodePtr temp = list.myFirst;
        while (temp != NULL)
        {
            insertAtEnd(temp->data);
            temp = temp->next;
        }
    }
    return *this;
}

ostream &operator<<(ostream &out, List &list)
{
    List::NodePtr temp = list.myFirst;
    while (temp != NULL)
    {
        out << temp->data << ", " << endl;
        temp = temp->next;
    }
    return out;
}