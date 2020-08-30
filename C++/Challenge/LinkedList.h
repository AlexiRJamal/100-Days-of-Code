#ifndef LIST_H
#define LIST_H

#include <iostream>
#include <cstdlib>

using namespace std;

typedef int ElementType;

class List
{
private:
    class Node
    {
    public:
        Node(ElementType data);
        ElementType data;
        Node *next;
    };
    typedef Node *NodePtr;

public:
    List();
    List(const List &orig);
    virtual ~List();
    bool isEmpty();
    void insertAtBegin(ElementType data);
    void insertAtEnd(ElementType data);
    void removeFromBegin();
    void removeFromEnd();
    List &operator=(List &list);
    friend ostream &operator<<(ostream &out, List &list);

private:
    NodePtr myFirst;
    int mySize;
};

#endif /* LIST_H */