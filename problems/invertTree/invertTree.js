function invertTree(root) {
    //we'll do breadth-first traversal of the tree
    //for each node, we'll swap the children

    let queue = [];
    //handle null case
    if (root) {
        queue.push(root);
    }
    let node, temp;

    while (queue.length > 0) {
        node = queue.shift();
        if (node.left || node.right) {
            temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
}

module.exports = invertTree;